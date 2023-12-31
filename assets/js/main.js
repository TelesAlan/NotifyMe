function notifyMe(title, { body, icon }){
	if(!window.Notification){
		console.log(`>> browser not support notifications.`);
	} else {
		
		if(Notification.permission === "granted"){
			if(!title) return console.log(`Please, send title param to show notification :(`);

			new Notification(title, {
				body,
				icon
			});
		} else {
			Notification.requestPermission().then(response => {
				response === "granted" ? 
				notifyMe(title, body, icon) : 
				console.log(`User blocked notifications.`);
			}).catch(err => console.log(err));
		}
	}
}