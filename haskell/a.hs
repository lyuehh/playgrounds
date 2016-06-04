max' :: (Ord a) => a -> a -> a
max' a b
     | a > b  = a
     | otherwise = b


bmiTell weight height
    | bmi <= 18.5 = "123"
    | bmi <= 25.0 = "456"
    | bmi <= 30.0 = "789"
    | otherwise = "xxx"
        where bmi = weight / height ^ 2


bmiTell2 weight height
    | bmi <= s1 = "123"
    | bmi <= s2 = "456"
    | bmi <= s3 = "789"
    | otherwise = "xxx"
        where bmi = weight / height ^ 2
              s1 = 18.5
              s2 = 25.0
              s3 = 30.0

calcBmi xs = [bmi w h | (w, h) <- xs]
    where bmi weight height = weight / height ^ 2

-- calcBmi2 :: [(a,a)] -> [a]
calcBmi2 :: Fractional t => [(t, t)] -> [t]
calcBmi2 xs = [bmi | (w, h) <- xs, let bmi = w / h ^ 2]

head' xs =
    case xs of [] -> error "123"
               (x:_) -> x

desc1 xs = "11" ++ case xs of [] -> "00"
                              [x] -> "11"
                              xs -> "123"

desc2 xs = "11" ++ what xs
    where what []  = "00"
          what [x] = "11"
          what xs = "123"


maximum' :: (Ord a) => [a] -> a
maximum' [] = error "123"
maximum' [x] = x
maximum' (x:xs)
    | x > maxTail  = x
    | otherwise = maxTail
        where maxTail  = maximum' xs

maximum2 :: (Ord a) => [a] -> a
maximum2 [] = error "123"
maximum2 [x] = x
maximum2 (x:xs) = max x (maximum2 xs)


replicate' n x
    | n <= 0 = []
    | otherwise = x:replicate' (n-1) x

take' n _
    | n <= 0  = []
take' _ [] = []
take' n (x:xs) = x : take' (n-1) xs

reverse' [] = []
reverse' (x:xs) = reverse' xs ++ [x]

repeat' x = x:repeat' x

zip' _ [] = []
zip' [] _ = []
zip' (x:xs) (y:ys) = (x,y):zip' xs ys

elem' a [] = False
elem' a (x:xs)
    | a == x = True
    | otherwise = a `elem` xs

quicksort [] = []
quicksort (x:xs) =
    let small = quicksort [a | a <- xs, a <= x]
        big = quicksort [a | a <- xs, a > x]
    in small ++ [x] ++ big

applyTwice f x = f (f x)

zipWith' _ [] _ = []
zipWith' _ _ [] = []
zipWith' f (x:xs) (y:ys) = f x y : zipWith' f xs ys

flip' :: (a -> b -> c) -> (b -> a -> c)
flip' f = g
    where g x y = f y x

map'  _ [] = []
map' f (x:xs) = f x : map f xs

filter' _ [] = []
filter' p (x:xs)
    | p x = x : filter' p xs
    | otherwise  = filter' p xs
