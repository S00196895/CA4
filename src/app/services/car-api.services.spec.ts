import {TestBed} from '@angular/core/testing';

import {CarApiService} from './car-api.services';

describe('CarApiService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: CarApiService = TestBed.get(CarApiService);
        expect(service).toBeTruthy();
    });
});