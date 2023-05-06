<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Parking extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'city',
        'nbrPlace',
        'nbrPlaceLibre',
    ];

    public function trafParkings()
    {
        return $this->belongsTo(TarifParking::class);
    }

    public function stationnements()
    {
        return $this->hasMany(Stationnements::class);
    }
}
