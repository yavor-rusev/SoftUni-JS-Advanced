function timeToWalk(steps, footInMeters, speedInKmPerHour) {
    let speedInMetersPerSec = (speedInKmPerHour * 1000) / 3600;
    let distanceInMeters = steps * footInMeters;
    let breakTimeInSec = Math.floor(distanceInMeters / 500) * 60;

    let totalTimeInSec = (distanceInMeters / speedInMetersPerSec) + breakTimeInSec;

    let hours = Math.floor(totalTimeInSec / 3600).toString().padStart(2, "0");
    let minutes = Math.floor((totalTimeInSec % 3600) / 60).toString().padStart(2, "0");
    let seconds = Math.round((totalTimeInSec % 3600) % 60).toString().padStart(2, "0");

    console.log(`${hours}:${minutes}:${seconds}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);