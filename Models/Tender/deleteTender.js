function DeleteTender(){
    DeleteTender.prototype.deleteTender = function(details){
       console.log('Tender Deleted Successfully:::', details);
    }
}
module.exports = DeleteTender;