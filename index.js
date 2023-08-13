//Kongpop Limlerphonboon

function getHandScore(on_hand) {
	card = on_hand.split(' ')
	const num = card[0].slice(1);
	H = 0
	C = 0
	D = 0
	S = 0
	duplicate = 0
	for (let index = 0; index < card.length; index++) {
		const type = card[index].slice(0, 1);
		const num = card[index].slice(1);
		if (type == 'H') {
			if (num == 'A') {
				H += 11
			} else if (num == 'J' || num == 'Q' || num == 'K') {
				H += 10
			} else {
				H += parseInt(num)
			}
		} else if (type == 'C') {
			if (num == 'A') {
				C += 11
			} else if (num == 'J' || num == 'Q' || num == 'K') {
				C += 10
			} else {
				C += parseInt(num)
			}
		} else if (type == 'D') {
			if (num == 'A') {
				D += 11
			} else if (num == 'J' || num == 'Q' || num == 'K') {
				D += 10
			} else {
				D += parseInt(num)
			}
		} else if (type == 'S') {
			if (num == 'A') {
				S += 11
			} else if (num == 'J' || num == 'Q' || num == 'K') {
				S += 10
			} else {
				S += parseInt(num)
			}
		}
	}
	if (num == 'A') {
		card.find(x => { if (x.slice(1) == num) { duplicate += 2 } });
	} else {
		card.find(x => { if (x.slice(1) == num) { duplicate++ } });
	}
	if (duplicate == 6) {
		return (35)
	} else if (duplicate == 3) {
		return (32.5)
	} else {
		return (Math.max(H, C, D, S));
	}
}

console.log(getHandScore("HA SA DA"))

function getClockAngle(hh_mm) {
	hh_mm = hh_mm.split(':')
	let hour = parseInt(hh_mm[0])
	let minute = parseInt(hh_mm[1])
	angle = 0
	if (hour == 12 || hour == 24 || hour == 0) {
		if (minute < 30) {
			angle = (6 * minute)
		} else if (minute == 30, 31, 32) {
			angle = (6 * minute) - 15
		} else if (minute == 33) {
			angle = 180
		} if (minute >= 34) {
			angle = (6 * (60 - minute)) + 15
		}
	} else if (hour >= 1 && hour <= 6 || hour >= 13 && hour <= 18) {
		if (hour >= 13 && hour <= 18) {
			hour = (hour - 12) * 5
		} else {
			hour = hour * 5
		}
		if (minute < 30) {
			angle = (6 * Math.abs(hour - minute))
		} else if (minute >= 30 && minute <= (32 + hour)) {
			angle = (6 * Math.abs(hour - minute)) - 15
		} else if (minute == (33 + hour)) {
			angle = 180
		} else if (minute >= (34 + hour)) {
			angle = (6 * ((60 - minute) + hour)) + 15
		}
	} else if (hour >= 7 && hour <= 11 || hour >= 19 && hour <= 23) {
		if (hour >= 19 && hour <= 23) {
			hour = (hour - 12) * 5
		} else {
			hour = hour * 5
		}
		if (minute <= 10) {
			angle = (6 * Math.abs((hour - minute) - 60))
		}
		else if (minute < 30) {
			angle = (6 * Math.abs(hour - minute))
		} else if (minute >= 30 && minute <= hour) {
			angle = (6 * Math.abs(hour - minute)) + 15
		} else if (minute == (33 + hour)) {
			angle = 180
		} else if (minute >= hour) {
			angle = (6 * (minute - hour)) - 15
		}
	}
	return Math.abs(angle)
}


// console.log(getClockAngle("12:50"))
// console.log(getClockAngle("14:00"))
// console.log(getClockAngle("06:45"))
console.log(getClockAngle("9:00"))
// console.log(getClockAngle("8:30"))
// console.log(getClockAngle("18:30"))

function getQuestionPart(phrases) {
 st = false
	for (let index = 1; index <= phrases.length; index++) {
		if(st){
			break
		}
		const element = phrases[index-1];
		const element2 = index == 3 ? phrases[0] :phrases[index];
		for (let index = 1; index <= element.length; index++) {
			word1 = element.slice(0, index)
			word = element2.search(word1)
			if (word == -1 && word1.length > 1) {
				word1 = element.slice(0, index - 1)
				st = true
				break
			}
			else if(word == -1 && word1.length == 1){
				break
			}
			
		}
	}
	
		

	arr = []
	for (let index = 0; index < phrases.length; index++) {
	
		if (phrases[index].search(word1) == 0) {
			arr.push(phrases[index].slice(phrases[index].search(word1) + word1.length).trim());
		} else {
			arr.push(phrases[index].slice(0, phrases[index].search(word1)).trim());
		}
	}

	return arr
}

console.log(getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"]));
// console.log(getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"]));
// console.log(getQuestionPart(["BEFRIEND", "FRIENDSHIP", "GIRLFRIEND"]));