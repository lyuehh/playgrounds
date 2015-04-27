#lang racket

(define (repeater f count) 
  (for ((i (in-range count))) (f)))

(let ([a (read)])
  (repeater 
    (lambda () ((let ([b (read)])
                (displayln b)))) a))
