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
        ]);
    }

    public function getDesc($id) {
        return Pizza::getDesc($id);
    }
}
