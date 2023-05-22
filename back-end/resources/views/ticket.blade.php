<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Test</title>
    <style>
        .card {
            width: 300px;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 20px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 100px;
        }

        .card .card-title {
            font-weight: bold;
            font-size: 20px;
            margin-bottom: 10px;
            text-align: center;
        }

        .card .card-text {
            margin-bottom: 10px;
        }

        .card .card-text span {
            font-weight: bold;
        }

        .card .card-footer {
            background-color: #f7f7f7;
            padding: 10px;
            border-top: 1px solid #ccc;
            border-radius: 0 0 5px 5px;
        }

        .card .card-footer .card-text {
            font-weight: bold;
            text-align: center;
        }
    </style>
</head>
<body>
    <div >
        <div class="card">
            <div class="card-body">
                <div class="card-title">{{$data['name']}}</div>
                <div class="card-text">
                    City : {{$data['city']}} <br>
                    place : {{$data['place']}} <br>
                    Prix : {{$data['prix']}} <br>
                    Nombre Unité : {{$data['nbrUnit']}} <br>
                </div>
                <div class="card-footer">
                    <div class="card-text">
                        Montant : {{$data['nbrUnit']}}
                    </div>
                </div>
            </div>
        </div>
        {{-- <table class="table table-striped table-hover table-borderless">
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Ville</th>
                <th>Place</th>
                <th>Prix</th>
                <th>nbrUnit</th>
                <th>Montant</th>
            </thead>
            <tbody>
                <tr>
                    <td>{{$data['id']}}</td>
                    <td>{{$data['name']}}</td>
                    <td>{{$data['city']}}</td>
                    <td>{{$data['place']}}</td>
                    <td>{{$data['prix']}}</td>
                    <td>{{$data['nbrUnit']}}</td>
                    <td>{{$data['Montant']}}</td>
                </tr>
            </tbody>
        </table> --}}
    </div>
</body>
</html>