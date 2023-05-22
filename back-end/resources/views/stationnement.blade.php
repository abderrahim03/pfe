<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Stationnements</title>
</head>
<body>
    <div class="container mt-5">
        <a href="{{route('generatePdf')}}">
            <button class="btn btn-primary my-5" >Generate PDF</button>
        </a>
        <table class="table table-striped table-hover table-borderless">
            <thead>
                <th>Id</th>
                <th>Date</th>
                <th>Place</th>
            </thead>
            <tbody>
                <tr>
                    <td>{{$stat->id}}</td>
                    <td>{{$stat->dateStat}}</td>
                    <td>{{$stat->place}}</td>
                </tr>
            </tbody>
            {{-- <tbody>
                @foreach ($stats as $stat)
                    <tr>
                        <td>{{$stat->id}} </td>
                        <td>{{$stat->dateStat}}</td>
                        <td>{{$stat->place}}</td>
                    </tr>
                @endforeach
            </tbody> --}}
        </table>
    </div>
</body>
</html>