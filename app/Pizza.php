<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pizza extends Model
{
    private static $USD = 1.15;
    private static $zones = [1200, 2150, 3100];
    
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

    public static function getZonesTarif() {
        $zones_usd = Self::$zones;
        foreach ($zones_usd as $key => $value) {
            $zones_usd[$key] = intval(round($value * Self::$USD));
        }

        return [
            'zones' => Self::$zones,
            'zones_usd' => $zones_usd,
        ];
    }
}
