package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func main() {
	var _ = strconv.Itoa // Ignore this comment. You can still use the package "strconv".

	var i = 4
	var d = 4.0
	var s = "HackerRank "

	scanner := bufio.NewScanner(os.Stdin)
	// Declare second integer, double, and String variables.
	var num = 12
	var dub = 4.0
	var str = "is the best place to learn and practice coding!"

	// Read and save an integer, double, and String to your variables.
	// Print the sum of both integer variables on a new line.
	var sum = num + i
	fmt.Println(sum)
	// Print the sum of the double variables on a new line.
	var dSum = dub + d
	fmt.Printf("%.1f \n", dSum)
	// Concatenate and print the String variables on a new line
	fmt.Println(s + str)
	// The 's' variable above should be printed first.
	scanner.Scan()
}
