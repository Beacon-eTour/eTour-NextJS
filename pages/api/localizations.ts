import * as Controller from "../../src/backend/controllers/controller";
import { CORS } from "../../src/backend/middleware/cors";
/**
 * @api {get}/api/localizations Request localization information
 * @apiName get localizations
 * @apiGroup Beacon_Info
 *
 * @apiExample {curl} Example usage:
 *    curl -i http://localhost:8080/api/localizations
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "results": {
 *            "en": {"app_name":"Application name"},
 *            "fin": {"app_name":"Sovelluksen nimi"}
 *        }
 *
 *     }
 *
 */
export default async function handler(req, res) {
  // Get data from your database
  if (req.method === "GET") {
    await CORS(req, res);
    // Process a GET request
    const results = await Controller.getLocalizations();

    res.status(200).json({ results });
  }
}
