// TODO add scale aliases e.g. 'major' == 'natural major'

const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const NOTES_SHARPS = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const NOTES_FLATS = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
// const SHARPS = ['A', 'C', 'D', 'F', 'G'];
// const FLATS = ['A', 'B', 'D', 'E', 'G'];

const SCALES = {
    'natural major': [0, 2, 4, 5, 7, 9, 11],            // C  D  E  F  G  A  B  C
    'natural minor': [0, 2, 3, 5, 7, 8, 10],            // C  D  Eb F  G  Ab Bb C
    'harmonic minor': [0, 2, 3, 5, 7, 8, 11],           // C  D  Eb F  G  Ab B  C
    'melodic minor': [0, 2, 3, 5, 7, 9, 11],            // C  D  Eb F  G  A  B  C
    'pentatonic major': [0, 2, 4, 7, 9],                // C  D  E  G  A
    'pentatonic minor': [0, 3, 5, 7, 10],               // C  Eb F  G  Bb
    'chromatic': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] // C  C# D  D# E  F  F# G  G# A  A# B  C
};

const MODES = {
    'ionian': [0, 2, 4, 5, 7, 9, 11],     // C  D  E  F  G  A  B  C
    'dorian': [0, 2, 3, 5, 7, 9, 10],     // C  D  Eb F  G  A  Bb C
    'phrygian': [0, 1, 3, 5, 7, 8, 10],   // C  Db Eb F  G  Ab Bb C
    'lydian': [0, 2, 4, 6, 7, 9, 11],     // C  D  E  F# G  A  B  C
    'mixolydian': [0, 2, 4, 5, 7, 9, 10], // C  D  E  F  G  A  Bb C
    'aeolian': [0, 2, 3, 5, 7, 9, 10],    // C  D  Eb F  G  Ab Bb C
    'locrian': [0, 1, 3, 5, 6, 8, 10]     // C  Db Eb F  Gb Ab Bb C
};

/**
 * Creates a notes array with the provided rootNote as the first note and the
 * other notes proceding.
 *
 * @param {string} rootNote
 * @returns {string[]} the notes with the
 */
function createNotesArray(rootNote) {
    const index = getNoteIndex(rootNote);
    return NOTES.slice(index).concat(NOTES.slice(0, index));
}

/**
 * Returns the index of the note in the current note array, e.g. when the key
 * is C, the note E has index 4, when the key is D#, note E has index 1. If
 * `notes` is not provided the default notes array, i.e. the key of C will be
 * used.
 *
 * @param {string} note the note to find the index of
 * @returns {number} the index of the note
 */
function getNoteIndex(note, notes = NOTES) {
    return notes.indexOf(note);
}

/**
 * Calculates the scale from the provided scale name and optional root note (the
 * default root note is C).
 *
 * @param {string} scaleName any of the available scales e.g. "natural major"
 * @param {string} [key] optional root key, defaults to C
 * @returns {Array} an array with all the notes in the specified scale
 */
function calculateScale(scaleName, key = 'C') {
    const calculatedScale = [];
    const notes = createNotesArray(key);
    SCALES[scaleName].forEach(noteIndex => {
        calculatedScale.push(notes[noteIndex]);
    });
    return calculatedScale;
}

// APP (temp)

const currentKey = 'C';
const currentScale = 'melodic minor';

const scale = calculateScale(currentScale, currentKey);
console.log('%s scale of key %s', currentScale, currentKey, scale);
