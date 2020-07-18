<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pizza extends Model
{
    private static $USD = 1.15;

    public static function getItems() {
        $array = Self::select('id', 'name', 'img', 'price')->get()->toArray();

        foreach ($array as $key => $value) {
            $array[$key]['usd'] = intval(round($value['price'] * Self::$USD));
        }

        return $array;
    }

    public static function getDesc($id) {
        return Self::select('desc')->where('id', $id)->first();
    }
}
