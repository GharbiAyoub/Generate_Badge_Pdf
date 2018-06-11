var fill_pdf = require('fill-pdf-utf8');
module.exports = class PdfGenerator {
    constructor(fields, sourcepdf, resultpdf) {
        this.fields = fields;
        this.sourcepdf = sourcepdf;
        this.resultpdf = resultpdf;
    }
    generateFormsPdf(call) {
        fill_pdf.generatePdf({ fields: this.fields }, this.sourcepdf, 'need_appearances', this.resultpdf, function (error, stdout, stderr) {
            if (error) {
                throw error;
                call(console.log('errrrrrrror'));
            }
            call("Badge generated with success")
            //console.log(this.fields);
        })
    }
}