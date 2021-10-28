import { decodeHtmlCharCodes } from "."

export const convertAsciiToString = (array: string[]) => {
  const words = array.toString()

  const newstring = words.split(" ")

  const formatedString = newstring.map((string) => {
    return ` ${decodeHtmlCharCodes(string)} `
  })

  return formatedString
}
