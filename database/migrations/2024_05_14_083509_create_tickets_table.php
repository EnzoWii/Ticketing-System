<?php
// database/migrations/xxxx_xx_xx_create_tickets_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTicketsTable extends Migration
{
    public function up()
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->string('category');
            $table->string('issue_type');
            $table->text('description');
            $table->string('assigned_to')->default('n/a');
            $table->string('priority')->default('n/a');
            $table->string('status')->default('Open');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('tickets');
    }
};