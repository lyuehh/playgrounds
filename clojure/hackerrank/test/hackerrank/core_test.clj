(ns hackerrank.core-test
  (:require [clojure.test :refer :all]
            [hackerrank.core :refer :all]))

(deftest a-test
  (testing "FIXME, I fail."
    (is (= 1 1))))

(deftest b-test
  (testing "xx"
    (is (= (foo "1") "1 Hello, World!"))))
