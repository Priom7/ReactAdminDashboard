<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReportHistory extends Model
{
    use HasFactory;
    protected $fillable = ["report_id", "report_status", "recieved_at", "recieved_by", "recieved_description", "resolved_at", "resolved_by", "resolved_description", "closed_at", "closed_by", "closed_description", "assigned_at", "assigned_by", "assigned_description", "assigned_to", "assigned_status", "forward_at", "forward_by", "forward_description", "forward_to", "forward_status"];

    public function report()
    {
        return $this->belongsTo(Report::class);
    }

    public function recievedBy()
    {
        return $this->belongsTo(User::class, 'recieved_by', 'id');
    }

    public function resolvedBy()
    {
        return $this->belongsTo(User::class, 'resolved_by', 'id');
    }

    public function closedBy()
    {
        return $this->belongsTo(User::class, 'closed_by', 'id');
    }

    public function assignedBy()
    {
        return $this->belongsTo(User::class, 'assigned_by', 'id');
    }

    public function assignedTo()
    {
        return $this->belongsTo(User::class, 'assigned_to', 'id');
    }

    public function forwardBy()
    {
        return $this->belongsTo(User::class, 'forward_by', 'id');
    }

    public function forwardTo()
    {
        return $this->belongsTo(User::class, 'forward_to', 'id');
    }

    public function creator()
    {
        return  $this->belongsTo(User::class, 'created_by', 'id');
    }

      // This method will be called when the model is being created
      public static function boot()
      {
          parent::boot();
  
          static::creating(function ($model) {
              // Set the created_by field if it's not already set
              if (empty($model->created_by)) {
                  // Assuming you have an authenticated user and you want to set their ID
                  $model->created_by = auth()->id();
              }
          });
  
          static::updating(function ($model) {
              // Set the updated_by field if it's not already set
              if (empty($model->updated_by)) {
                  // Assuming you have an authenticated user and you want to set their ID
                  $model->updated_by = auth()->id();
              }
          });
      }
}
