/**
 * BadgeController
 *
 * @description :: Server-side logic for managing Badges
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const PdfGenerator = require('../implimentation/PdfGenerator');
module.exports = {

    index: function (req, res) {

        console.log(req.body);

        var modelpdf = 'C:/Users/USER4/Desktop/testTeamGIT/SailsJS/Generate_Badge_Pdf/Docs/badgeTemplarePDF_Model.pdf';
        var resultpdf = 'C:/Users/USER4/Desktop/testTeamGIT/SailsJS/Generate_Badge_Pdf/Docs/badgeTemplarePDF_Model_output.pdf';
        var fields = req.body;
        var pdf = new PdfGenerator(fields, modelpdf, resultpdf);
        pdf.generateFormsPdf(function (result) {
            res.send({
                result
            })
        });
    }
};

