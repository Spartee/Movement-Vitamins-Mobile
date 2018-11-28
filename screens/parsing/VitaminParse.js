


function VitaminParse(obj) {
    return {
	description: obj.Description,
	mobility: obj.Mobility === "TRUE",
	name: obj.Name,
	stability: obj.Stability === "TRUE",
	targetArea: obj["Target Area"],
	youtubeLink: obj["YouTube Link"]
    };
}

export default VitaminParse;
