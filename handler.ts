import { APIGatewayEvent, APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";
import Pdf from "./src/utils/pdf";
import { pdfText, result } from "./src/interface/pdfText";
import axios from "axios";

export const findKeywordInPDF: APIGatewayProxyHandler = async (
  event: APIGatewayEvent,
  _context
) => {
  const searchResult: Array<result> = [];

  const pdfFile = await axios.get(
    "https://researchtorevenue.files.wordpress.com/2015/04/1r41ai10801601_fong.pdf",
    { responseType: "arraybuffer" }
  );
  const pdfText: pdfText[] = await Pdf.getPDFText(pdfFile.data);
  const keywords: Array<string> =
    event.queryStringParameters?.keywords?.split("|");

  for (let keyword of keywords) {
    searchResult.push({
      keyword,
      searchResult: await Pdf.searchPage(pdfText, keyword),
    });
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        result: searchResult,
      },
      null,
      2
    ),
  };
};
