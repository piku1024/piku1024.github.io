import { BackendService } from './../services/backend.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'setproduct',
  templateUrl: './setproduct.component.html',
  styleUrls: ['./setproduct.component.scss']
})
export class SetproductComponent implements OnInit, OnDestroy {

  toggleField: string;
  dataSource: MatTableDataSource<any>;
  members: any[];
  myDocData: any;

  savedChanges = false;
  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  private querySubscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['category', 'scategory', 'name', 'price', '_id'];

  constructor(private _backendService: BackendService) { }

  ngOnInit() {
    this.toggleField = "searchMode";
    this.dataSource = new MatTableDataSource(this.members);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  toggle(filter?) {
    if (!filter) { filter = "searchMode" }
    else { filter = filter; }
    this.toggleField = filter;
  }

  getData() {
    this.dataLoading = true;
    this.querySubscription = this._backendService.getProducts('product')
      .subscribe(members => {
        this.members = members;
        this.dataSource = new MatTableDataSource(members);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataLoading = false;
      },
        (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => { this.error = false; this.dataLoading = false; });

  }

  getFilterData(filters) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.getFilterProducts('product', filters)
      .subscribe(members => {
        this.members = members;
        this.dataSource = new MatTableDataSource(members);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataLoading = false;
      },
        (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => { this.error = false; this.dataLoading = false; });

  }

  setData(formData) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.setProducts('product', formData)
      .subscribe(members => {
        if (members) {
          this.savedChanges = true;
          this.dataLoading = false;
        }
      },
        (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => { this.error = false; this.dataLoading = false; });

  }
  updateData(formData) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.updateProducts('product', formData)
      .subscribe(members => {
        if (members) {
          this.savedChanges = true;
          this.dataLoading = false;
        }
      },
        (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => { this.error = false; this.dataLoading = false; });

  }

  getDoc(docId) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.getOneProductDoc('product', docId)
      .subscribe(res => {
        if (res) {
          this.myDocData = res;
          this.toggle('editMode');
          this.dataLoading = false;
        }
      },
        (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => { this.error = false; this.dataLoading = false; });

  }

  deleteDoc(docId) {
    if (confirm("are oyu sure yoju wanna delete??")) {
      this.dataLoading = true;
      this.querySubscription = this._backendService.delOneProductDoc('product', docId)
        .subscribe(res => {
          if (res) {

            this.toggle('searchMode');
            this.dataLoading = false;
          }
        },
          (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
          },
          () => { this.error = false; this.dataLoading = false; });
    }

  }


  // functions------------------------------

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }


}

