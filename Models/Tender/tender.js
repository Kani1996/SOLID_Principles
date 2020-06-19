
//  This is a Constructor function taking age and passport 
//  as the paramaters
function Tender(tenderDetails) {
    this.tenderName= tenderDetails.tenderName;
    this.tenderType = tenderDetails.tenderType;
    this.bidSubmissionDate = tenderDetails.bidSubmissionDate  }
    Tender.prototype.setTenderName = function(name){
        this.tenderName = name;
    }
    Tender.prototype.setTenderType = function(type){
        this.tenderName = type;
    }
    Tender.prototype.setBidSubmissionDate = function(date){
        this.bidSubmissionDate = date;
    }

  module.exports = Tender;
