gdjs.Modulo_326Code = {};
gdjs.Modulo_326Code.localVariables = [];
gdjs.Modulo_326Code.idToCallbackMap = new Map();
gdjs.Modulo_326Code.GDTextBoxBackgroundObjects1= [];
gdjs.Modulo_326Code.GDTextBoxBackgroundObjects2= [];
gdjs.Modulo_326Code.GDTextBoxBackgroundObjects3= [];
gdjs.Modulo_326Code.GDNextButtonObjects1= [];
gdjs.Modulo_326Code.GDNextButtonObjects2= [];
gdjs.Modulo_326Code.GDNextButtonObjects3= [];
gdjs.Modulo_326Code.GDTextBoxBackground2Objects1= [];
gdjs.Modulo_326Code.GDTextBoxBackground2Objects2= [];
gdjs.Modulo_326Code.GDTextBoxBackground2Objects3= [];
gdjs.Modulo_326Code.GDFiatoCortoObjects1= [];
gdjs.Modulo_326Code.GDFiatoCortoObjects2= [];
gdjs.Modulo_326Code.GDFiatoCortoObjects3= [];
gdjs.Modulo_326Code.GDHandRObjects1= [];
gdjs.Modulo_326Code.GDHandRObjects2= [];
gdjs.Modulo_326Code.GDHandRObjects3= [];
gdjs.Modulo_326Code.GDHandLObjects1= [];
gdjs.Modulo_326Code.GDHandLObjects2= [];
gdjs.Modulo_326Code.GDHandLObjects3= [];
gdjs.Modulo_326Code.GDPettoObjects1= [];
gdjs.Modulo_326Code.GDPettoObjects2= [];
gdjs.Modulo_326Code.GDPettoObjects3= [];
gdjs.Modulo_326Code.GDsintomo1Objects1= [];
gdjs.Modulo_326Code.GDsintomo1Objects2= [];
gdjs.Modulo_326Code.GDsintomo1Objects3= [];
gdjs.Modulo_326Code.GDsintomo2Objects1= [];
gdjs.Modulo_326Code.GDsintomo2Objects2= [];
gdjs.Modulo_326Code.GDsintomo2Objects3= [];
gdjs.Modulo_326Code.GDsintomo3Objects1= [];
gdjs.Modulo_326Code.GDsintomo3Objects2= [];
gdjs.Modulo_326Code.GDsintomo3Objects3= [];
gdjs.Modulo_326Code.GDsintomo4Objects1= [];
gdjs.Modulo_326Code.GDsintomo4Objects2= [];
gdjs.Modulo_326Code.GDsintomo4Objects3= [];
gdjs.Modulo_326Code.GDPalpitazioniObjects1= [];
gdjs.Modulo_326Code.GDPalpitazioniObjects2= [];
gdjs.Modulo_326Code.GDPalpitazioniObjects3= [];
gdjs.Modulo_326Code.GDProntoSoccorsoObjects1= [];
gdjs.Modulo_326Code.GDProntoSoccorsoObjects2= [];
gdjs.Modulo_326Code.GDProntoSoccorsoObjects3= [];
gdjs.Modulo_326Code.GDmonitoringObjects1= [];
gdjs.Modulo_326Code.GDmonitoringObjects2= [];
gdjs.Modulo_326Code.GDmonitoringObjects3= [];
gdjs.Modulo_326Code.GDTimelineObjects1= [];
gdjs.Modulo_326Code.GDTimelineObjects2= [];
gdjs.Modulo_326Code.GDTimelineObjects3= [];
gdjs.Modulo_326Code.GDNewBBTextObjects1= [];
gdjs.Modulo_326Code.GDNewBBTextObjects2= [];
gdjs.Modulo_326Code.GDNewBBTextObjects3= [];
gdjs.Modulo_326Code.GDNewBBText2Objects1= [];
gdjs.Modulo_326Code.GDNewBBText2Objects2= [];
gdjs.Modulo_326Code.GDNewBBText2Objects3= [];
gdjs.Modulo_326Code.GDalarm1Objects1= [];
gdjs.Modulo_326Code.GDalarm1Objects2= [];
gdjs.Modulo_326Code.GDalarm1Objects3= [];
gdjs.Modulo_326Code.GDalarm2Objects1= [];
gdjs.Modulo_326Code.GDalarm2Objects2= [];
gdjs.Modulo_326Code.GDalarm2Objects3= [];
gdjs.Modulo_326Code.GDalarm3Objects1= [];
gdjs.Modulo_326Code.GDalarm3Objects2= [];
gdjs.Modulo_326Code.GDalarm3Objects3= [];


gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDFiatoCortoObjects2Objects = Hashtable.newFrom({"FiatoCorto": gdjs.Modulo_326Code.GDFiatoCortoObjects2});
gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDTimelineObjects2Objects = Hashtable.newFrom({"Timeline": gdjs.Modulo_326Code.GDTimelineObjects2});
gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDFiatoCortoObjects1Objects = Hashtable.newFrom({"FiatoCorto": gdjs.Modulo_326Code.GDFiatoCortoObjects1});
gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDTimelineObjects1Objects = Hashtable.newFrom({"Timeline": gdjs.Modulo_326Code.GDTimelineObjects1});
gdjs.Modulo_326Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Modulo_326Code.GDFiatoCortoObjects1, gdjs.Modulo_326Code.GDFiatoCortoObjects2);

gdjs.copyArray(runtimeScene.getObjects("Timeline"), gdjs.Modulo_326Code.GDTimelineObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDFiatoCortoObjects2Objects, gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDTimelineObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_326Code.GDFiatoCortoObjects2.length;i<l;++i) {
    if ( gdjs.Modulo_326Code.GDFiatoCortoObjects2[i].getVariableNumber(gdjs.Modulo_326Code.GDFiatoCortoObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_326Code.GDFiatoCortoObjects2[k] = gdjs.Modulo_326Code.GDFiatoCortoObjects2[i];
        ++k;
    }
}
gdjs.Modulo_326Code.GDFiatoCortoObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_326Code.GDFiatoCortoObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDFiatoCortoObjects2.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDFiatoCortoObjects2[i].returnVariable(gdjs.Modulo_326Code.GDFiatoCortoObjects2[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDFiatoCortoObjects2.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDFiatoCortoObjects2[i].activateBehavior("Draggable", false);
}
}
}

}


{

/* Reuse gdjs.Modulo_326Code.GDFiatoCortoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Timeline"), gdjs.Modulo_326Code.GDTimelineObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDFiatoCortoObjects1Objects, gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDTimelineObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_326Code.GDFiatoCortoObjects1 */
{for(var i = 0, len = gdjs.Modulo_326Code.GDFiatoCortoObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDFiatoCortoObjects1[i].setX(gdjs.Modulo_326Code.GDFiatoCortoObjects1[i].getVariables().getFromIndex(2).getAsNumber());
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDFiatoCortoObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDFiatoCortoObjects1[i].setY(gdjs.Modulo_326Code.GDFiatoCortoObjects1[i].getVariables().getFromIndex(1).getAsNumber());
}
}
}

}


};gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDPettoObjects2Objects = Hashtable.newFrom({"Petto": gdjs.Modulo_326Code.GDPettoObjects2});
gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDTimelineObjects2Objects = Hashtable.newFrom({"Timeline": gdjs.Modulo_326Code.GDTimelineObjects2});
gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDPettoObjects1Objects = Hashtable.newFrom({"Petto": gdjs.Modulo_326Code.GDPettoObjects1});
gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDTimelineObjects1Objects = Hashtable.newFrom({"Timeline": gdjs.Modulo_326Code.GDTimelineObjects1});
gdjs.Modulo_326Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Modulo_326Code.GDPettoObjects1, gdjs.Modulo_326Code.GDPettoObjects2);

gdjs.copyArray(runtimeScene.getObjects("Timeline"), gdjs.Modulo_326Code.GDTimelineObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDPettoObjects2Objects, gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDTimelineObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_326Code.GDPettoObjects2.length;i<l;++i) {
    if ( gdjs.Modulo_326Code.GDPettoObjects2[i].getVariableNumber(gdjs.Modulo_326Code.GDPettoObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_326Code.GDPettoObjects2[k] = gdjs.Modulo_326Code.GDPettoObjects2[i];
        ++k;
    }
}
gdjs.Modulo_326Code.GDPettoObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_326Code.GDPettoObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDPettoObjects2.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDPettoObjects2[i].returnVariable(gdjs.Modulo_326Code.GDPettoObjects2[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDPettoObjects2.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDPettoObjects2[i].activateBehavior("Draggable", false);
}
}
}

}


{

/* Reuse gdjs.Modulo_326Code.GDPettoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Timeline"), gdjs.Modulo_326Code.GDTimelineObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDPettoObjects1Objects, gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDTimelineObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_326Code.GDPettoObjects1 */
{for(var i = 0, len = gdjs.Modulo_326Code.GDPettoObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDPettoObjects1[i].setX(gdjs.Modulo_326Code.GDPettoObjects1[i].getVariables().getFromIndex(2).getAsNumber());
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDPettoObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDPettoObjects1[i].setY(gdjs.Modulo_326Code.GDPettoObjects1[i].getVariables().getFromIndex(1).getAsNumber());
}
}
}

}


};gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDPalpitazioniObjects2Objects = Hashtable.newFrom({"Palpitazioni": gdjs.Modulo_326Code.GDPalpitazioniObjects2});
gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDTimelineObjects2Objects = Hashtable.newFrom({"Timeline": gdjs.Modulo_326Code.GDTimelineObjects2});
gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDPalpitazioniObjects1Objects = Hashtable.newFrom({"Palpitazioni": gdjs.Modulo_326Code.GDPalpitazioniObjects1});
gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDTimelineObjects1Objects = Hashtable.newFrom({"Timeline": gdjs.Modulo_326Code.GDTimelineObjects1});
gdjs.Modulo_326Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Modulo_326Code.GDPalpitazioniObjects1, gdjs.Modulo_326Code.GDPalpitazioniObjects2);

gdjs.copyArray(runtimeScene.getObjects("Timeline"), gdjs.Modulo_326Code.GDTimelineObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDPalpitazioniObjects2Objects, gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDTimelineObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_326Code.GDPalpitazioniObjects2.length;i<l;++i) {
    if ( gdjs.Modulo_326Code.GDPalpitazioniObjects2[i].getVariableNumber(gdjs.Modulo_326Code.GDPalpitazioniObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_326Code.GDPalpitazioniObjects2[k] = gdjs.Modulo_326Code.GDPalpitazioniObjects2[i];
        ++k;
    }
}
gdjs.Modulo_326Code.GDPalpitazioniObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_326Code.GDPalpitazioniObjects2 */
{for(var i = 0, len = gdjs.Modulo_326Code.GDPalpitazioniObjects2.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDPalpitazioniObjects2[i].activateBehavior("Draggable", false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDPalpitazioniObjects2.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDPalpitazioniObjects2[i].returnVariable(gdjs.Modulo_326Code.GDPalpitazioniObjects2[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
}

}


{

/* Reuse gdjs.Modulo_326Code.GDPalpitazioniObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Timeline"), gdjs.Modulo_326Code.GDTimelineObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDPalpitazioniObjects1Objects, gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDTimelineObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_326Code.GDPalpitazioniObjects1 */
{for(var i = 0, len = gdjs.Modulo_326Code.GDPalpitazioniObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDPalpitazioniObjects1[i].setX(gdjs.Modulo_326Code.GDPalpitazioniObjects1[i].getVariables().getFromIndex(2).getAsNumber());
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDPalpitazioniObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDPalpitazioniObjects1[i].setY(gdjs.Modulo_326Code.GDPalpitazioniObjects1[i].getVariables().getFromIndex(1).getAsNumber());
}
}
}

}


};gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDmonitoringObjects2Objects = Hashtable.newFrom({"monitoring": gdjs.Modulo_326Code.GDmonitoringObjects2});
gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDTimelineObjects2Objects = Hashtable.newFrom({"Timeline": gdjs.Modulo_326Code.GDTimelineObjects2});
gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDmonitoringObjects1Objects = Hashtable.newFrom({"monitoring": gdjs.Modulo_326Code.GDmonitoringObjects1});
gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDTimelineObjects1Objects = Hashtable.newFrom({"Timeline": gdjs.Modulo_326Code.GDTimelineObjects1});
gdjs.Modulo_326Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Timeline"), gdjs.Modulo_326Code.GDTimelineObjects2);
gdjs.copyArray(gdjs.Modulo_326Code.GDmonitoringObjects1, gdjs.Modulo_326Code.GDmonitoringObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDmonitoringObjects2Objects, gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDTimelineObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_326Code.GDmonitoringObjects2.length;i<l;++i) {
    if ( gdjs.Modulo_326Code.GDmonitoringObjects2[i].getVariableNumber(gdjs.Modulo_326Code.GDmonitoringObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_326Code.GDmonitoringObjects2[k] = gdjs.Modulo_326Code.GDmonitoringObjects2[i];
        ++k;
    }
}
gdjs.Modulo_326Code.GDmonitoringObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_326Code.GDmonitoringObjects2 */
{for(var i = 0, len = gdjs.Modulo_326Code.GDmonitoringObjects2.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDmonitoringObjects2[i].activateBehavior("Draggable", false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDmonitoringObjects2.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDmonitoringObjects2[i].returnVariable(gdjs.Modulo_326Code.GDmonitoringObjects2[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Timeline"), gdjs.Modulo_326Code.GDTimelineObjects1);
/* Reuse gdjs.Modulo_326Code.GDmonitoringObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDmonitoringObjects1Objects, gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDTimelineObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_326Code.GDmonitoringObjects1 */
{for(var i = 0, len = gdjs.Modulo_326Code.GDmonitoringObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDmonitoringObjects1[i].setX(gdjs.Modulo_326Code.GDmonitoringObjects1[i].getVariables().getFromIndex(2).getAsNumber());
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDmonitoringObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDmonitoringObjects1[i].setY(gdjs.Modulo_326Code.GDmonitoringObjects1[i].getVariables().getFromIndex(1).getAsNumber());
}
}
}

}


};gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDProntoSoccorsoObjects2Objects = Hashtable.newFrom({"ProntoSoccorso": gdjs.Modulo_326Code.GDProntoSoccorsoObjects2});
gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDTimelineObjects2Objects = Hashtable.newFrom({"Timeline": gdjs.Modulo_326Code.GDTimelineObjects2});
gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDProntoSoccorsoObjects1Objects = Hashtable.newFrom({"ProntoSoccorso": gdjs.Modulo_326Code.GDProntoSoccorsoObjects1});
gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDTimelineObjects1Objects = Hashtable.newFrom({"Timeline": gdjs.Modulo_326Code.GDTimelineObjects1});
gdjs.Modulo_326Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Modulo_326Code.GDProntoSoccorsoObjects1, gdjs.Modulo_326Code.GDProntoSoccorsoObjects2);

gdjs.copyArray(runtimeScene.getObjects("Timeline"), gdjs.Modulo_326Code.GDTimelineObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDProntoSoccorsoObjects2Objects, gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDTimelineObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_326Code.GDProntoSoccorsoObjects2.length;i<l;++i) {
    if ( gdjs.Modulo_326Code.GDProntoSoccorsoObjects2[i].getVariableNumber(gdjs.Modulo_326Code.GDProntoSoccorsoObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_326Code.GDProntoSoccorsoObjects2[k] = gdjs.Modulo_326Code.GDProntoSoccorsoObjects2[i];
        ++k;
    }
}
gdjs.Modulo_326Code.GDProntoSoccorsoObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_326Code.GDProntoSoccorsoObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDProntoSoccorsoObjects2.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDProntoSoccorsoObjects2[i].returnVariable(gdjs.Modulo_326Code.GDProntoSoccorsoObjects2[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDProntoSoccorsoObjects2.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDProntoSoccorsoObjects2[i].activateBehavior("Draggable", false);
}
}
}

}


{

/* Reuse gdjs.Modulo_326Code.GDProntoSoccorsoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Timeline"), gdjs.Modulo_326Code.GDTimelineObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDProntoSoccorsoObjects1Objects, gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDTimelineObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_326Code.GDProntoSoccorsoObjects1 */
{for(var i = 0, len = gdjs.Modulo_326Code.GDProntoSoccorsoObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDProntoSoccorsoObjects1[i].setX(0);
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDProntoSoccorsoObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDProntoSoccorsoObjects1[i].setY(0);
}
}
}

}


};gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDHandLObjects1Objects = Hashtable.newFrom({"HandL": gdjs.Modulo_326Code.GDHandLObjects1});
gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDNextButtonObjects1Objects = Hashtable.newFrom({"NextButton": gdjs.Modulo_326Code.GDNextButtonObjects1});
gdjs.Modulo_326Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FiatoCorto"), gdjs.Modulo_326Code.GDFiatoCortoObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewBBText"), gdjs.Modulo_326Code.GDNewBBTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewBBText2"), gdjs.Modulo_326Code.GDNewBBText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_326Code.GDNextButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Palpitazioni"), gdjs.Modulo_326Code.GDPalpitazioniObjects1);
gdjs.copyArray(runtimeScene.getObjects("Petto"), gdjs.Modulo_326Code.GDPettoObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground"), gdjs.Modulo_326Code.GDTextBoxBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground2"), gdjs.Modulo_326Code.GDTextBoxBackground2Objects1);
gdjs.copyArray(runtimeScene.getObjects("alarm1"), gdjs.Modulo_326Code.GDalarm1Objects1);
gdjs.copyArray(runtimeScene.getObjects("alarm2"), gdjs.Modulo_326Code.GDalarm2Objects1);
gdjs.copyArray(runtimeScene.getObjects("alarm3"), gdjs.Modulo_326Code.GDalarm3Objects1);
gdjs.copyArray(runtimeScene.getObjects("monitoring"), gdjs.Modulo_326Code.GDmonitoringObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDNextButtonObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowNextButtonTimer");
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDalarm1Objects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDalarm1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDalarm2Objects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDalarm2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDalarm3Objects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDalarm3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDNewBBTextObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDNewBBTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDTextBoxBackgroundObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDTextBoxBackgroundObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDNewBBText2Objects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDNewBBText2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDTextBoxBackground2Objects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDTextBoxBackground2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDFiatoCortoObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDFiatoCortoObjects1[i].returnVariable(gdjs.Modulo_326Code.GDFiatoCortoObjects1[i].getVariables().getFromIndex(2)).setNumber((gdjs.Modulo_326Code.GDFiatoCortoObjects1[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDFiatoCortoObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDFiatoCortoObjects1[i].returnVariable(gdjs.Modulo_326Code.GDFiatoCortoObjects1[i].getVariables().getFromIndex(1)).setNumber((gdjs.Modulo_326Code.GDFiatoCortoObjects1[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDPettoObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDPettoObjects1[i].returnVariable(gdjs.Modulo_326Code.GDPettoObjects1[i].getVariables().getFromIndex(2)).setNumber((gdjs.Modulo_326Code.GDPettoObjects1[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDPettoObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDPettoObjects1[i].returnVariable(gdjs.Modulo_326Code.GDPettoObjects1[i].getVariables().getFromIndex(1)).setNumber((gdjs.Modulo_326Code.GDPettoObjects1[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDPalpitazioniObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDPalpitazioniObjects1[i].returnVariable(gdjs.Modulo_326Code.GDPalpitazioniObjects1[i].getVariables().getFromIndex(2)).setNumber((gdjs.Modulo_326Code.GDPalpitazioniObjects1[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDPalpitazioniObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDPalpitazioniObjects1[i].returnVariable(gdjs.Modulo_326Code.GDPalpitazioniObjects1[i].getVariables().getFromIndex(1)).setNumber((gdjs.Modulo_326Code.GDPalpitazioniObjects1[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDmonitoringObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDmonitoringObjects1[i].returnVariable(gdjs.Modulo_326Code.GDmonitoringObjects1[i].getVariables().getFromIndex(2)).setNumber((gdjs.Modulo_326Code.GDmonitoringObjects1[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDmonitoringObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDmonitoringObjects1[i].returnVariable(gdjs.Modulo_326Code.GDmonitoringObjects1[i].getVariables().getFromIndex(1)).setNumber((gdjs.Modulo_326Code.GDmonitoringObjects1[i].getPointY("")));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowNextButtonTimer") >= 12;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_326Code.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.Modulo_326Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDNextButtonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_326Code.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_326Code.GDNextButtonObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_326Code.GDNextButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_326Code.GDNextButtonObjects1[k] = gdjs.Modulo_326Code.GDNextButtonObjects1[i];
        ++k;
    }
}
gdjs.Modulo_326Code.GDNextButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Conclusione", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HandL"), gdjs.Modulo_326Code.GDHandLObjects1);
{for(var i = 0, len = gdjs.Modulo_326Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDHandLObjects1[i].setX(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDHandLObjects1[i].setY(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FiatoCorto"), gdjs.Modulo_326Code.GDFiatoCortoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_326Code.GDFiatoCortoObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_326Code.GDFiatoCortoObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_326Code.GDFiatoCortoObjects1[k] = gdjs.Modulo_326Code.GDFiatoCortoObjects1[i];
        ++k;
    }
}
gdjs.Modulo_326Code.GDFiatoCortoObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Modulo_326Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Petto"), gdjs.Modulo_326Code.GDPettoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_326Code.GDPettoObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_326Code.GDPettoObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_326Code.GDPettoObjects1[k] = gdjs.Modulo_326Code.GDPettoObjects1[i];
        ++k;
    }
}
gdjs.Modulo_326Code.GDPettoObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Modulo_326Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Palpitazioni"), gdjs.Modulo_326Code.GDPalpitazioniObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_326Code.GDPalpitazioniObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_326Code.GDPalpitazioniObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_326Code.GDPalpitazioniObjects1[k] = gdjs.Modulo_326Code.GDPalpitazioniObjects1[i];
        ++k;
    }
}
gdjs.Modulo_326Code.GDPalpitazioniObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Modulo_326Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("monitoring"), gdjs.Modulo_326Code.GDmonitoringObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_326Code.GDmonitoringObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_326Code.GDmonitoringObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_326Code.GDmonitoringObjects1[k] = gdjs.Modulo_326Code.GDmonitoringObjects1[i];
        ++k;
    }
}
gdjs.Modulo_326Code.GDmonitoringObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Modulo_326Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17295596);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewBBText"), gdjs.Modulo_326Code.GDNewBBTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewBBText2"), gdjs.Modulo_326Code.GDNewBBText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground"), gdjs.Modulo_326Code.GDTextBoxBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground2"), gdjs.Modulo_326Code.GDTextBoxBackground2Objects1);
gdjs.copyArray(runtimeScene.getObjects("alarm1"), gdjs.Modulo_326Code.GDalarm1Objects1);
gdjs.copyArray(runtimeScene.getObjects("alarm2"), gdjs.Modulo_326Code.GDalarm2Objects1);
gdjs.copyArray(runtimeScene.getObjects("alarm3"), gdjs.Modulo_326Code.GDalarm3Objects1);
{for(var i = 0, len = gdjs.Modulo_326Code.GDNewBBTextObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDNewBBTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDTextBoxBackgroundObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDTextBoxBackgroundObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDNewBBText2Objects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDNewBBText2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDTextBoxBackground2Objects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDTextBoxBackground2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDalarm1Objects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDalarm1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDalarm2Objects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDalarm2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDalarm3Objects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDalarm3Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ProntoSoccorso"), gdjs.Modulo_326Code.GDProntoSoccorsoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Modulo_326Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HandL"), gdjs.Modulo_326Code.GDHandLObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_326Code.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDHandLObjects1Objects, gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDNextButtonObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_326Code.GDHandLObjects1 */
/* Reuse gdjs.Modulo_326Code.GDNextButtonObjects1 */
{for(var i = 0, len = gdjs.Modulo_326Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDHandLObjects1[i].setLayer("UI");
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDHandLObjects1[i].setZOrder((( gdjs.Modulo_326Code.GDNextButtonObjects1.length === 0 ) ? 0 :gdjs.Modulo_326Code.GDNextButtonObjects1[0].getZOrder()) + 1);
}
}
}

}


};

gdjs.Modulo_326Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Modulo_326Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_326Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_326Code.GDTextBoxBackgroundObjects3.length = 0;
gdjs.Modulo_326Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_326Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_326Code.GDNextButtonObjects3.length = 0;
gdjs.Modulo_326Code.GDTextBoxBackground2Objects1.length = 0;
gdjs.Modulo_326Code.GDTextBoxBackground2Objects2.length = 0;
gdjs.Modulo_326Code.GDTextBoxBackground2Objects3.length = 0;
gdjs.Modulo_326Code.GDFiatoCortoObjects1.length = 0;
gdjs.Modulo_326Code.GDFiatoCortoObjects2.length = 0;
gdjs.Modulo_326Code.GDFiatoCortoObjects3.length = 0;
gdjs.Modulo_326Code.GDHandRObjects1.length = 0;
gdjs.Modulo_326Code.GDHandRObjects2.length = 0;
gdjs.Modulo_326Code.GDHandRObjects3.length = 0;
gdjs.Modulo_326Code.GDHandLObjects1.length = 0;
gdjs.Modulo_326Code.GDHandLObjects2.length = 0;
gdjs.Modulo_326Code.GDHandLObjects3.length = 0;
gdjs.Modulo_326Code.GDPettoObjects1.length = 0;
gdjs.Modulo_326Code.GDPettoObjects2.length = 0;
gdjs.Modulo_326Code.GDPettoObjects3.length = 0;
gdjs.Modulo_326Code.GDsintomo1Objects1.length = 0;
gdjs.Modulo_326Code.GDsintomo1Objects2.length = 0;
gdjs.Modulo_326Code.GDsintomo1Objects3.length = 0;
gdjs.Modulo_326Code.GDsintomo2Objects1.length = 0;
gdjs.Modulo_326Code.GDsintomo2Objects2.length = 0;
gdjs.Modulo_326Code.GDsintomo2Objects3.length = 0;
gdjs.Modulo_326Code.GDsintomo3Objects1.length = 0;
gdjs.Modulo_326Code.GDsintomo3Objects2.length = 0;
gdjs.Modulo_326Code.GDsintomo3Objects3.length = 0;
gdjs.Modulo_326Code.GDsintomo4Objects1.length = 0;
gdjs.Modulo_326Code.GDsintomo4Objects2.length = 0;
gdjs.Modulo_326Code.GDsintomo4Objects3.length = 0;
gdjs.Modulo_326Code.GDPalpitazioniObjects1.length = 0;
gdjs.Modulo_326Code.GDPalpitazioniObjects2.length = 0;
gdjs.Modulo_326Code.GDPalpitazioniObjects3.length = 0;
gdjs.Modulo_326Code.GDProntoSoccorsoObjects1.length = 0;
gdjs.Modulo_326Code.GDProntoSoccorsoObjects2.length = 0;
gdjs.Modulo_326Code.GDProntoSoccorsoObjects3.length = 0;
gdjs.Modulo_326Code.GDmonitoringObjects1.length = 0;
gdjs.Modulo_326Code.GDmonitoringObjects2.length = 0;
gdjs.Modulo_326Code.GDmonitoringObjects3.length = 0;
gdjs.Modulo_326Code.GDTimelineObjects1.length = 0;
gdjs.Modulo_326Code.GDTimelineObjects2.length = 0;
gdjs.Modulo_326Code.GDTimelineObjects3.length = 0;
gdjs.Modulo_326Code.GDNewBBTextObjects1.length = 0;
gdjs.Modulo_326Code.GDNewBBTextObjects2.length = 0;
gdjs.Modulo_326Code.GDNewBBTextObjects3.length = 0;
gdjs.Modulo_326Code.GDNewBBText2Objects1.length = 0;
gdjs.Modulo_326Code.GDNewBBText2Objects2.length = 0;
gdjs.Modulo_326Code.GDNewBBText2Objects3.length = 0;
gdjs.Modulo_326Code.GDalarm1Objects1.length = 0;
gdjs.Modulo_326Code.GDalarm1Objects2.length = 0;
gdjs.Modulo_326Code.GDalarm1Objects3.length = 0;
gdjs.Modulo_326Code.GDalarm2Objects1.length = 0;
gdjs.Modulo_326Code.GDalarm2Objects2.length = 0;
gdjs.Modulo_326Code.GDalarm2Objects3.length = 0;
gdjs.Modulo_326Code.GDalarm3Objects1.length = 0;
gdjs.Modulo_326Code.GDalarm3Objects2.length = 0;
gdjs.Modulo_326Code.GDalarm3Objects3.length = 0;

gdjs.Modulo_326Code.eventsList5(runtimeScene);
gdjs.Modulo_326Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_326Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_326Code.GDTextBoxBackgroundObjects3.length = 0;
gdjs.Modulo_326Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_326Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_326Code.GDNextButtonObjects3.length = 0;
gdjs.Modulo_326Code.GDTextBoxBackground2Objects1.length = 0;
gdjs.Modulo_326Code.GDTextBoxBackground2Objects2.length = 0;
gdjs.Modulo_326Code.GDTextBoxBackground2Objects3.length = 0;
gdjs.Modulo_326Code.GDFiatoCortoObjects1.length = 0;
gdjs.Modulo_326Code.GDFiatoCortoObjects2.length = 0;
gdjs.Modulo_326Code.GDFiatoCortoObjects3.length = 0;
gdjs.Modulo_326Code.GDHandRObjects1.length = 0;
gdjs.Modulo_326Code.GDHandRObjects2.length = 0;
gdjs.Modulo_326Code.GDHandRObjects3.length = 0;
gdjs.Modulo_326Code.GDHandLObjects1.length = 0;
gdjs.Modulo_326Code.GDHandLObjects2.length = 0;
gdjs.Modulo_326Code.GDHandLObjects3.length = 0;
gdjs.Modulo_326Code.GDPettoObjects1.length = 0;
gdjs.Modulo_326Code.GDPettoObjects2.length = 0;
gdjs.Modulo_326Code.GDPettoObjects3.length = 0;
gdjs.Modulo_326Code.GDsintomo1Objects1.length = 0;
gdjs.Modulo_326Code.GDsintomo1Objects2.length = 0;
gdjs.Modulo_326Code.GDsintomo1Objects3.length = 0;
gdjs.Modulo_326Code.GDsintomo2Objects1.length = 0;
gdjs.Modulo_326Code.GDsintomo2Objects2.length = 0;
gdjs.Modulo_326Code.GDsintomo2Objects3.length = 0;
gdjs.Modulo_326Code.GDsintomo3Objects1.length = 0;
gdjs.Modulo_326Code.GDsintomo3Objects2.length = 0;
gdjs.Modulo_326Code.GDsintomo3Objects3.length = 0;
gdjs.Modulo_326Code.GDsintomo4Objects1.length = 0;
gdjs.Modulo_326Code.GDsintomo4Objects2.length = 0;
gdjs.Modulo_326Code.GDsintomo4Objects3.length = 0;
gdjs.Modulo_326Code.GDPalpitazioniObjects1.length = 0;
gdjs.Modulo_326Code.GDPalpitazioniObjects2.length = 0;
gdjs.Modulo_326Code.GDPalpitazioniObjects3.length = 0;
gdjs.Modulo_326Code.GDProntoSoccorsoObjects1.length = 0;
gdjs.Modulo_326Code.GDProntoSoccorsoObjects2.length = 0;
gdjs.Modulo_326Code.GDProntoSoccorsoObjects3.length = 0;
gdjs.Modulo_326Code.GDmonitoringObjects1.length = 0;
gdjs.Modulo_326Code.GDmonitoringObjects2.length = 0;
gdjs.Modulo_326Code.GDmonitoringObjects3.length = 0;
gdjs.Modulo_326Code.GDTimelineObjects1.length = 0;
gdjs.Modulo_326Code.GDTimelineObjects2.length = 0;
gdjs.Modulo_326Code.GDTimelineObjects3.length = 0;
gdjs.Modulo_326Code.GDNewBBTextObjects1.length = 0;
gdjs.Modulo_326Code.GDNewBBTextObjects2.length = 0;
gdjs.Modulo_326Code.GDNewBBTextObjects3.length = 0;
gdjs.Modulo_326Code.GDNewBBText2Objects1.length = 0;
gdjs.Modulo_326Code.GDNewBBText2Objects2.length = 0;
gdjs.Modulo_326Code.GDNewBBText2Objects3.length = 0;
gdjs.Modulo_326Code.GDalarm1Objects1.length = 0;
gdjs.Modulo_326Code.GDalarm1Objects2.length = 0;
gdjs.Modulo_326Code.GDalarm1Objects3.length = 0;
gdjs.Modulo_326Code.GDalarm2Objects1.length = 0;
gdjs.Modulo_326Code.GDalarm2Objects2.length = 0;
gdjs.Modulo_326Code.GDalarm2Objects3.length = 0;
gdjs.Modulo_326Code.GDalarm3Objects1.length = 0;
gdjs.Modulo_326Code.GDalarm3Objects2.length = 0;
gdjs.Modulo_326Code.GDalarm3Objects3.length = 0;


return;

}

gdjs['Modulo_326Code'] = gdjs.Modulo_326Code;
