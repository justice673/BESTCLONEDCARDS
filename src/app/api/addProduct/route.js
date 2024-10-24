import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/Product";

// Post method
export const GET = async () => {
  try {
    await dbConnect();
    const product = await Product.find().sort({ createdAt: -1 });
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (req) => {
  try {
    const { title, description, price, image } = await req.json();

    if (!title || !description || !price || !image) {
      return new NextResponse("All fields are required", { status: 400 });
    }

    // Configure Cloudinary
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    // Upload image to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(image, {
      public_id: title,
    });

    // Connect to the database
    await dbConnect();

    // Create a new product
    const newProduct = new Product({
      title,
      description,
      price,
      image: uploadResult.secure_url, // Save the Cloudinary URL
    });

    await newProduct.save(); // Save the new product in the database

    return new NextResponse(JSON.stringify(newProduct), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Server Error", { status: 500 });
  }
};
