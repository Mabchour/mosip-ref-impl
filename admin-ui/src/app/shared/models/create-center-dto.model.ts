import {Holiday} from './holiday.model';


export class CreateCenterDto {
    constructor(
        public addressLine1: string,
        public addressLine2: string,
        public addressLine3: string,
        public centerEndTime: string,
        public centerStartTime: string,
        public centerTypeCode: string,
        public contactPerson: string,
        public contactPhone: string,
        public holidayLocationCode: string,
        public langCode: string,
        public latitude: string,
        public locationCode: string,
        public longitude: string,
        public lunchEndTime: string,
        public lunchStartTime: string,
        public name: string,
        public perKioskProcessTime: string,
        public timeZone: string,
        public workingHours: string,
        public zoneCode: string,
        public id?: string | null,
        public isActive?: boolean,
        public workingNonWorkingDays?: any,
        public exceptionalHolidayPutPostDto?: Holiday[],
    ) {
    }
}
