import {ableToAttendAll, arrangeMeetingRooms} from "./meetingRooms";

describe('meetingRooms', () => {
  describe('ableToAttendAll', () => {
    it('should return false', () => {
      expect(ableToAttendAll([[0, 30], [5, 10], [15, 20]])).toBeFalsy()
    });

    it('should return true', () => {
      expect(ableToAttendAll([[7, 10], [2, 4]])).toBeTruthy()
    });
  });

  describe('arrangeMeetingRooms', () => {
    it('should return 2', () => {
      expect(arrangeMeetingRooms([[0, 30], [5, 10], [15, 20]])).toEqual(2)
    });

    it('should return 1', () => {
      expect(arrangeMeetingRooms([[7, 10], [2, 4]])).toEqual(1)
    });
  });
});
