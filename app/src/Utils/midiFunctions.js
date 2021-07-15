import { WebMidi } from "webmidi";

function getAllDevices() {
  return WebMidi.enable().then(() => {
    const arr = WebMidi.outputs.map((output) => {
      return { id: output.id, name: output.name };
    });
    return arr;
  });
}

function setPreset(presetNumber, scene, id) {
  WebMidi.enable().then(() => {
    let axeFxIn = WebMidi.getOutputById(id).channels[1];
    axeFxIn.setProgram(presetNumber + 1, 1);
    axeFxIn.sendControlChange(34, scene - 1);
  });
}

function setScene(scene, id) {
  WebMidi.enable().then(() => {
    let axeFxIn = WebMidi.getOutputById(id).channels[1];
    axeFxIn.sendControlChange(34, scene - 1);
  });
}

export { getAllDevices, setPreset, setScene };
