public class BoatSearchResults {
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        try{
            List<Boat__c> boatList = new List<Boat__c>();
            if(String.isNotEmpty(boatTypeId)){
                boatList = [Select Id, Name, Picture__c, Contact__r.Name From Boat__c Where BoatType__c = :boatTypeId];
            }else{
                boatList = [Select Id, Name, Picture__c, Contact__r.Name From Boat__c ];
            }
            
            return boatList;
        }catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }

}