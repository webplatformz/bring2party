import {Party} from "./party";

export class Operation {
  method: string;
  party: Party;

  constructor(method: string, party: Party) {
    this.method = method;
    this.party = party;
  }
}
