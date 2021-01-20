<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Validator;
use Config;
use App\Product;
use App\Category;

class ProductController extends Controller
{
	public function add(Request $request)
  {
    Log::info(
      "Create product request with ",
      array('request' => $request->all())
    );
        
    $validator = Validator::make(
      $request->all(),
      [
        'name' => 'required|string|unique:product',
        'short_description' => 'required|string',
        'long_description' => 'required|string|max:100',
				'category_id' => 'required|integer'
      ]
    );

    if ($validator->fails()) {
      Log::error(
        "Create product request failed with validation error",
        array(
          'error' => $validator->errors()
        )
      );
      return $this->sendResponse("01", Config::get('constant.respDesc.01'), $validator->errors());
    }

		$category = Category::find($request->category_id);
		if (!$category) {
			Log::info(
        "Create product request failed because category not found"
      );
      return $this->sendResponse("02", Config::get('constant.respDesc.07'), "");
		}

    $product = new Product($request->all());
    try {
      $product->save();
    } catch (Exception $e) {
      Log::error(
        "Create product request failed with exception",
        array(
          'error' => $e->getMessage()
        )
      );
      return $this->sendResponse("02", Config::get('constant.respDesc.02'), $e->getMessage());
    }

    Log::info(
    	"Create product request success",
        array(
          'product' => $product
        )
      );
      return $this->sendResponse("00", Config::get('constant.respDesc.00'), $product);
  }

  public function edit(Request $request)
  {
    Log::info(
      "Update product request with ",
      array('request' => $request->all())
    );
        
    $validator = Validator::make(
      $request->all(),
      [
        'id' => 'required|integer',
        'name' => 'required|string',
        'short_description' => 'required|string',
        'long_description' => 'required|string|max:100',
				'category_id' => 'required|integer'
      ]
    );

    if ($validator->fails()) {
      Log::error(
        "Update product request failed with validation error for product",
        array(
          'product_id' => $request->id,
          'error' => $validator->errors()
        )
      );
      return $this->sendResponse("01", Config::get('constant.respDesc.01'), $validator->errors());
    }

		$category = Category::find($request->category_id);
		if (!$category) {
			Log::info(
        "Create product request failed because category not found"
      );
      return $this->sendResponse("02", Config::get('constant.respDesc.07'), "");
		}

    $product = Product::find($request->id);
    if ($product) {
      $product->name = $request->name;
      $product->short_description = $request->short_description;
      $product->long_description = $request->long_description;
      $product->category_id = $request->category_id;
      try {
        $product->save();
      } catch (Exception $e) {
        Log::error(
          "Update product request failed with exception for product",
          array(
            'product_id' => $request->id,
            'error' => $e->getMessage()
          )
        );
        return $this->sendResponse("02", Config::get('constant.respDesc.02'), $e->getMessage());
      }

      return $this->sendResponse("00", Config::get('constant.respDesc.00'), $product);
    } else {
      return $this->sendResponse("07", Config::get('constant.respDesc.07'), null);
    }
  }

  public function read()
  {
    return $this->sendResponse("00", Config::get('constant.respDesc.00'), Product::with('category')->get());
  }

  public function remove(Request $request)
  {
		Log::info(
      "Delete product request with ",
      array('request' => $request->all())
    );
        
    $validator = Validator::make(
      $request->all(),
      [
        'id' => 'required|integer'
      ]
    );

		if ($validator->fails()) {
      Log::error(
        "Delete product request failed with validation error for product",
        array(
          'product_id' => $request->id,
          'error' => $validator->errors()
        )
      );
      return $this->sendResponse("01", Config::get('constant.respDesc.01'), $validator->errors());
    }

		$product = Product::find($request->id);
		if ($product) {
			try {
				$product->delete();
			} catch (Exception $e) {
        Log::error(
          "Delete product request failed with exception for product",
          array(
            'product_id' => $request->id,
            'error' => $e->getMessage()
          )
        );
        return $this->sendResponse("02", Config::get('constant.respDesc.02'), $e->getMessage());
      }

			return $this->sendResponse("00", Config::get('constant.respDesc.00'), null);
		} else {
			return $this->sendResponse("07", Config::get('constant.respDesc.07'), null);
		}
  }
}
