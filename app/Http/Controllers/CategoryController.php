<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Validator;
use Config;
use App\Category;

class CategoryController extends Controller
{
  public function add(Request $request)
  {
    Log::info(
      "Create category request with ",
      array('request' => $request->all())
    );
        
    $validator = Validator::make(
      $request->all(),
      [
        'name' => 'required|string|unique:category',
        'short_description' => 'required|string',
        'long_description' => 'required|string|max:100'
      ]
    );

    if ($validator->fails()) {
      Log::error(
        "Create category request failed with validation error",
        array(
          'error' => $validator->errors()
        )
      );
      return $this->sendResponse("01", Config::get('constant.respDesc.01'), $validator->errors());
    }

    $category = new Category($request->all());
    try {
      $category->save();
    } catch (Exception $e) {
      Log::error(
        "Create category request failed with exception",
        array(
          'error' => $e->getMessage()
        )
      );
      return $this->sendResponse("02", Config::get('constant.respDesc.02'), $e->getMessage());
    }

    Log::info(
    	"Create category request success",
        array(
          'category' => $category
        )
      );
      return $this->sendResponse("00", Config::get('constant.respDesc.00'), $category);
  }

  public function edit(Request $request)
  {
    Log::info(
      "Update category request with ",
      array('request' => $request->all())
    );
        
    $validator = Validator::make(
      $request->all(),
      [
        'id' => 'required|integer',
        'name' => 'required|string',
        'short_description' => 'required|string',
        'long_description' => 'required|string|max:100'
      ]
    );

    if ($validator->fails()) {
      Log::error(
        "Update category request failed with validation error for category",
        array(
          'category_id' => $request->id,
          'error' => $validator->errors()
        )
      );
      return $this->sendResponse("01", Config::get('constant.respDesc.01'), $validator->errors());
    }

    $category = Category::find($request->id);
    if ($category) {
      $category->name = $request->name;
      $category->short_description = $request->short_description;
      $category->long_description = $request->long_description;

      try {
        $category->save();
      } catch (Exception $e) {
        Log::error(
          "Update category request failed with exception for category",
          array(
            'category_id' => $request->id,
            'error' => $e->getMessage()
          )
        );
        return $this->sendResponse("02", Config::get('constant.respDesc.02'), $e->getMessage());
      }

      return $this->sendResponse("00", Config::get('constant.respDesc.00'), $category);
    } else {
      return $this->sendResponse("07", Config::get('constant.respDesc.07'), null);
    }
  }

  public function read()
  {
    return $this->sendResponse("00", Config::get('constant.respDesc.00'), Category::all());
  }

  public function remove(Request $request)
  {
		Log::info(
      "Delete category request with ",
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
        "Delete category request failed with validation error for category",
        array(
          'category_id' => $request->id,
          'error' => $validator->errors()
        )
      );
      return $this->sendResponse("01", Config::get('constant.respDesc.01'), $validator->errors());
    }

		$category = Category::find($request->id);
		if ($category) {
			try {
				$category->delete();
			} catch (Exception $e) {
        Log::error(
          "Delete category request failed with exception for category",
          array(
            'category_id' => $request->id,
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
