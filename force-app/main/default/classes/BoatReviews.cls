public class BoatReviews {
   @AuraEnabled
   public static List<BoatReview__c> getAll(Id boatId){
      try{
        List<BoatReview__c> reviews = [Select Id, Name, Comment__c, Rating__c, LastModifiedDate, 
                                        CreatedDate, CreatedBy.Name, CreatedBy.SmallPhotoUrl, CreatedBy.CompanyName from BoatReview__c Where Boat__c = :boatId];

        return reviews;
      } catch (Exception e){
         throw new AuraHandledException(e.getMessage());
      }
   }
}