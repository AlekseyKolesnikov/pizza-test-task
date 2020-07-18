<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pizza extends Model
{
    public static function getItems() {
        return Self::select('id', 'name', 'img', 'price')->get();
    }
}
