public class BoatSearchForm {
	@AuraEnabled(cacheable=true)
    public static List<BoatTypeSelect> getAllBoatTypeList(){
        try{
            List<BoatTypeSelect> boatTypeList = new List<BoatTypeSelect>();
            for(BoatType__c aBoat : [Select name From BoatType__c]){
                BoatTypeSelect boatSelect = new BoatTypeSelect();
                boatSelect.label = aBoat.Name;
                boatSelect.value = aBoat.Id;
                boatTypeList.add(boatSelect);
            }
            
            return boatTypeList;
        }catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    public class BoatTypeSelect{
        @AuraEnabled
        public String label;
        @AuraEnabled
        public String value;
    }
}