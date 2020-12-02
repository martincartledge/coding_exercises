package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func main() {
	reader := bufio.NewReaderSize(os.Stdin, 1024*1024)

	NTemp, err := strconv.ParseInt(readLine(reader), 10, 64)
	checkError(err)
	N := int32(NTemp)

	if N%2 != 0 {
		fmt.Println("Weird")
	}

	if N%2 == 0 {
		if N >= 2 && N <= 5 {
			fmt.Println("Not Weird")
		}

		if N >= 6 && N <= 20 {
			fmt.Println("Weird")
		}

		if N > 20 {
			fmt.Println("Not Weird")
		}
	}
}
