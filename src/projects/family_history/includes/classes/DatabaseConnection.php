<?php
class DatabaseConnection
{
  public static function getConnection()
  {
    $host = 'localhost';
    $database = 'family_history';
    $user = 'web';
    $pass = 'password';
    $dsn = "mysql:host={$host};dbname={$database}";
    $options = [
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ];

    $connection = new PDO($dsn, $user, $pass, $options);

    return $connection;
  }
}