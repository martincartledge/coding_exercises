package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func main() {
	reader := bufio.NewReaderSize(os.Stdin, 1024*1024)

	nTemp, err := strconv.ParseInt(readLine(reader), 10, 64)
	checkError(err)
	n := int32(nTemp)

	var limit int32 = 11
	var count int32 = 1
	for count < limit {
		result := n * count
		fmt.Printf("%d x %d = %d\n", n, count, result)
		count++
	}
}
