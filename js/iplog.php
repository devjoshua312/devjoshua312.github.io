// get user details
    $user_agent = $_SERVER['HTTP_USER_AGENT']; //user browser
    $ip_address = $_SERVER["REMOTE_ADDR"];     // user ip adderss
    $page_name = $_SERVER["SCRIPT_NAME"];      // page the user looking
    $query_string = $_SERVER["QUERY_STRING"];   // what query he used
    $current_page = $page_name."?".$query_string; 



// get location 
    $url = json_decode(file_get_contents
    ("http://api.ipinfodb.com/v3/ip-city/",
     "?key=/9fddab964eac2d62b1a2979606f49dd363852afca9dadfc880ff51671c97fa88/")

    ip = (".$_SERVER['REMOTE_ADDR']."&format=json)); 

    $country = $url->countryName;  // user country        
    $city=$url->cityName;       // city
    $region = $url->regionName;   // regoin
    $latitude = $url->latitude;    //lat and lon
    $longitude = $url->longitude;

// get time
    date_default_timezone_set('UTC');
    $date = date("Y-m-d");
    $time = date("H:i:s");

// <script>
// // Requiring fs module in which
// // writeFile function is defined.
// const fs = require('fs')

// // Write data in 'Output.txt' .
// fs.writeFile('Output.txt', data, (err) => {
    
//     // In case of a error throw err.
//     if (err) throw err;
// })
// </script>