<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
  use HasFactory;
	protected $table = 'product';

	/**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'name', 'short_description', 'long_description', 'category_id'
  ];

	public function category() {
		return $this->belongsTo(Category::class);
	}
}
