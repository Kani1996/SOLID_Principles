function CreateTender(){
    CreateTender.prototype.insertTender = function(details){
       console.log('Tender Inserted Successfully:::', details);
    }
}
module.exports = CreateTender;