<?php

namespace App\Http\Controllers;

use App\City;
use App\Reservas;
use App\Restaurant;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RestaurantsController extends Controller
{
    public function getRestaurants()
    {
        $restaurante = Restaurant::with('city')->get();
        return $restaurante->toArray();
    }

    public function SaveRestaurant(Request $request)
    {
        $status = false;
        $result = null;
        DB::beginTransaction();
        try {
            // return $request;
            $restaurante = new Restaurant();
            $restaurante->name = $request->name;
            $restaurante->description = $request->descripcion;
            $restaurante->img = $request->img;
            $restaurante->address = $request->address;
            $restaurante->min_price = $request->min_price;
            $restaurante->city_id = $request->city;
            $restaurante->save();

            $status = true;
            DB::commit();
        } catch (\Throwable $th) {
            $result = $th->getMessage();
            DB::rollBack();
        }if($status){
            return ['se creo exitosamente el restaurante'];
        }else {
            return $result;
        }
    }

    public function getCities()
    {
        return City::all()->toArray();
    }

    public function deleteRestaurant($id)
    {
        $Restaurant = Restaurant::where('id',$id)->delete();
        return json_encode(['Se elimino exitosamente el restaurante']);
    }

    public function EditRestaurant(Request $request)
    {
        $status = false;
        $result = null;
        DB::beginTransaction();
        try {
            $restaurante =  Restaurant::find($request->id);
            $restaurante->name = $request->name;
            $restaurante->description = $request->descripcion;
            $restaurante->img = $request->img;
            $restaurante->address = $request->address;
            $restaurante->min_price = $request->min_price;
            $restaurante->city_id = $request->city;
            $restaurante->save();

            $status = true;
            DB::commit();
        } catch (\Throwable $th) {
            $result = $th->getMessage();
            DB::rollBack();
        }if($status){
            return ['se edito exitosamente el restaurante'];
        }else {
            return $result;
        }
    }

    public function getReservas()
    {
        $reservas = Reservas::all();
        return $reservas->toArray();
    }

    public function deleteReservas($id)
    {
        $Reservas = Reservas::where('id',$id)->delete();
        return json_encode(['Se elimino exitosamente la reserva']);
    }

    public function EditReservas(Request $request)
    {
        $status = false;
        $result = null;
        DB::beginTransaction();
        try {
            $reservas =  Reservas::find($request->id);
            $reservas->client = $request->client;
            $reservas->documento = $request->documento;
            $reservas->fecha = $request->fecha;
            $reservas->hora = $request->hora;
            $reservas->save();

            $status = true;
            DB::commit();
        } catch (\Throwable $th) {
            $result = $th->getMessage();
            DB::rollBack();
        }if($status){
            return ['se edito exitosamente las reservas'];
        }else {
            return $result;
        }
    }

    public function SaveReservas(Request $request)
    {
        $status = false;
        $result = null;
        DB::beginTransaction();
        try {
            // return $request;
            $fecha = Carbon::parse($request->fecha)->format('Y-m-d');
            $hora = Carbon::parse($request->hora)->format('H:i:s');
            $restaurante = new Reservas();
            $restaurante->client = $request->client;
            $restaurante->documento = $request->documento;
            $restaurante->fecha = $fecha;
            $restaurante->hora = $hora;
            $restaurante->save();

            $status = true;
            DB::commit();
        } catch (\Throwable $th) {
            $result = $th->getMessage();
            DB::rollBack();
        }if($status){
            return ['se creo exitosamente la reserva'];
        }else {
            return $result;
        }
    }
}
