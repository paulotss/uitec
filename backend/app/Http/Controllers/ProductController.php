<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Resources\ProductResource;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ProductResource::collection(Product::all());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Product::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return new ProductResource(Product::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        if(Product::where('id', $id)->exists())
        {
            $product = Product::find($id);
            $product->name = $request->name;
            $product->category_id = $request->category_id;
            $product->price = $request->price;
            $product->expiration = $request->expiration;
            $product->amount = $request->amount;
            $product->perishable = $request->perishable;

            $product->save();
            return response()->json([
                "message" => "Record update successfully"
            ], 201);
        }
        else
        {
            return response()->json([
                "message" => "Product not found"
            ], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        if(Product::where('id', $id)->exists())
        {
            $product = Product::find($id);
            $product->delete();

            return response()->json([
                "message" => "Record deleted"
            ], 200);
        }
        else
        {
            return response()->json([
                "message" => "Product not found"
            ], 404);
        }
    }
}
