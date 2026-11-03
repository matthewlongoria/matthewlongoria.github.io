export const CHECKS = ['Source and observation time recorded','Asset identifier reviewed','Location and accuracy reviewed','Follow-up action documented'];
export function validateObservation(v) {
 if(!v || typeof v!=='object')throw Error('Invalid observation.');
 const title=String(v.title||'').trim();if(!title||title.length>120)throw Error('Enter a title of 1–120 characters.');
 const notes=String(v.notes||'');if(notes.length>5000)throw Error('Notes must be under 5,000 characters.');
 const asset=String(v.asset||'').trim();if(asset.length>120)throw Error('Asset ID is too long.');
 const category=['Drainage','Utilities','Roadway','GIS review','Other'].includes(v.category)?v.category:'Other';
 const priority=['Routine','Follow up','Urgent review'].includes(v.priority)?v.priority:'Routine';
 let location=null;
 if(v.location){const {latitude,longitude,accuracy,capturedAt}=v.location;
  if(!Number.isFinite(latitude)||Math.abs(latitude)>90||!Number.isFinite(longitude)||Math.abs(longitude)>180||!Number.isFinite(accuracy)||accuracy<0||!Number.isFinite(Date.parse(capturedAt)))throw Error('Invalid location or accuracy.');
  location={latitude,longitude,accuracy,capturedAt};}
 return {title,notes,asset,category,priority,location,checks:CHECKS.map((_,i)=>!!v.checks?.[i])};
}
function cell(v){let s=String(v??'');if(/^[\s]*[=+\-@]/.test(s)||/^[\t\r]/.test(s))s="'"+s;return '"'+s.replaceAll('"','""')+'"';}
export function toCsv(records){const head=['id','title','asset_id','category','priority','created_utc','updated_utc','latitude_wgs84','longitude_wgs84','accuracy_m','location_utc','checks_recorded','notes','photo_name'];return '\ufeff'+[head.map(cell).join(','),...records.map(r=>[r.id,r.title,r.asset,r.category,r.priority,r.createdAt,r.updatedAt,r.location?.latitude,r.location?.longitude,r.location?.accuracy,r.location?.capturedAt,(r.checks||[]).filter(Boolean).length+'/4',r.notes,r.photo?.name].map(cell).join(','))].join('\r\n');}
export function toGeoJSON(records){return {type:'FeatureCollection',features:records.map(r=>({type:'Feature',id:r.id,geometry:r.location?{type:'Point',coordinates:[r.location.longitude,r.location.latitude]}:null,properties:{title:r.title,asset_id:r.asset,category:r.category,priority:r.priority,created_utc:r.createdAt,updated_utc:r.updatedAt,accuracy_m:r.location?.accuracy??null,location_utc:r.location?.capturedAt??null,checks:r.checks,notes:r.notes,photo_name:r.photo?.name??null}}))};}
export function fileStem(text){return String(text).replace(/[^a-zA-Z0-9_-]/g,'-').slice(0,70)||'observation';}
