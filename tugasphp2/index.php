<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    function triangle_upside_left($sym, $n){
        
        for($i = 1; $i <= $n; $i++){
            for($j = $n; $j > $n-$i; $j--){
            echo $sym;
            
            }
            echo "<br>";
        }
        
    }

    function triangle_downside_left($sym, $n){
       
        for($i = 1; $i <= $n; $i++){
            for($j = 0 ; $j <= $n-$i; $j++){
            echo $sym;
            
            }
            echo "<br>";
        }
        
    }

    function triangle_upside_right($sym, $n){
        
        for($i = 1; $i <= $n; $i++){
            for($j = 0; $j < $n-$i; $j++){
                echo "&nbsp;&nbsp;";
                
            }
            for($k = 1; $k <= $i; $k++){
                echo $sym;
                    
            }
            echo "<br>";
        }
        
    }

    function triangle_downside_right($sym, $n){
        
        for($i = 1; $i <= $n; $i++){
            
            for($k = 1; $k < $i; $k++){
                echo "&nbsp;&nbsp";
                    
            }
            for($j = 0; $j <= $n-$i; $j++){
                echo $sym;
                
            }
            echo "<br>";
        }
        
    }

    function condition_pattern($sym, $n, $pil){
        if($pil == 1 ){
            triangle_upside_left($sym, $n);
        }else if($pil == 2){
            triangle_downside_left($sym, $n);
        }else if($pil == 3){
            triangle_upside_right($sym, $n);
        }else if ($pil == 4){
            triangle_downside_right($sym, $n);
        }
    }

    echo "triangle_upside_left <br>";
    triangle_upside_left("*", 5);
    echo "<br>";
    echo "triangle_downside_left <br>";
    triangle_downside_left("*",5);
    echo "<br>";
    echo "triangle_upside_right <br>";
    triangle_upside_right("*",5);
    echo "<br>";
    echo "triangle_downside_right <br>";
    triangle_downside_right("*",5);
    echo "<br>";
    echo "condition_pattern";
    echo "<br>";
    echo "triangle_upside_left $ <br>";
    condition_pattern("$",6, 1);
    echo "<br>";
    echo "triangle_downside_left @ <br>";
    condition_pattern("@",10, 2);
    echo "<br>";
    echo "triangle_upside_right # <br>";
    condition_pattern("#",9, 3);
    echo "<br>";
    echo "triangle_downside_right * <br>";
    condition_pattern("*",6, 4);
    ?>
</body>
</html>