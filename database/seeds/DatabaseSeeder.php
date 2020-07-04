<?php

use App\City;
use App\Reservas;
use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'anyi_lozano',
            'email' => 'arelozano210914@gmail.com',
            'password' => Hash::make('123456')
        ]);

        City::create([
            'name' => 'Bogotá',
        ]);
        City::create([
            'name' => 'Medellin',
        ]);
        City::create([
            'name' => 'Cali',
        ]);

        Reservas::create([
            'client' => 'rodrigo loznao',
            'documento' => '23333309',
            'fecha' => '2020-07-04',
            'hora' => '19:00:00'
        ]);
        Reservas::create([
            'client' => 'federico',
            'documento' => '233',
            'fecha' => '2020-07-04',
            'hora' => '19:00:00'
        ]);
    }
}
