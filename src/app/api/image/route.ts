import { NextResponse } from "next/server";
import { exec } from "child_process";

export async function POST(request: Request) {
  const { question, answer } = await request.json();
  console.log("welcome to the api");
  // console.log("question is ", question);
  // console.log("answer is ", answer);

  // console.log(img1, img2);

  // `source virenv/bin/activate && python3 src/python/ImgSimilarityCalculator.py "${img1}" "${img2}"`,
  // python3 ./src/python/ImgSimilarityCalculator.py ./src/image/cir1.jpg ./src/image/cir2.jpg     

  const calculateSimilarityPromise = new Promise((resolve, reject) => {
    exec(
      `python3 ./src/python/ssim.py "${question}" "${answer}"`,  // the quotation marks are important since question and answer URLs may contain special characters
      (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        reject(error);
      } else {
        const similarityResult = parseFloat(stdout.trim()); // Assuming the result is a number
        if (!isNaN(similarityResult)) {
          resolve(similarityResult);
        } else {
          reject(new Error("Invalid similarity result format"));
        }
      }
    }
    );
  })
  
  // console.log(calculateSimilarityPromise);
  const result = await calculateSimilarityPromise;
  // console.log("The score is ", result);
  // const calculateSimilarityPromise = new Promise((resolve, reject) => {
  // });

  return NextResponse.json({ result });
}