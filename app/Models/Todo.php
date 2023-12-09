<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Todo extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;
  /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
      
    ];

    protected $appends = [
        'image',
      
    ];
    public function registerMediaConversion(Media $media=null){
       
        $this->addMediaConversion('thumb')->fit('crop',50,50);
        $this->addMediaConversion('preview')->fit('crop',50,50);
    }


    public function getImageAttribute()
    {
        $file = $this->getMedia('image')->last();
        if ($file) {
            $file->url       = $file->getUrl();
            $file->thumbnail = $file->getUrl('thumb');
            $file->preview   = $file->getUrl('preview');
        }

        return $file;
    }

}
