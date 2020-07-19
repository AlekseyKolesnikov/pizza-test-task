<?php

namespace App\Http\Controllers;

use App\Pizza;
use Illuminate\Http\Request;

class PizzaController extends Controller
{
    /**
     * @return \Illuminate\Http\Response
     */
    public function index() {
        return view('index', [
            'items' => json_encode(Pizza::getItems(), JSON_UNESCAPED_UNICODE),
            'root' => env('ROOT', ''),
            'zones' => json_encode(Pizza::getZonesTarif()),
        ]);
    }

    public function getDesc($id) {
        return Pizza::getDesc($id);
    }
}
